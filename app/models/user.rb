# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: :true
  validates :email, email: true, allow_blank: true, uniqueness: { case_sensitive: false }

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_many :data_sources, foreign_key: :owner_id
  has_many :charts, foreign_key: :owner_id

  has_many :in_share, class_name: "Share", foreign_key: "sharer_id"
  has_many :in_shared_charts, through: :in_share, source: :shared_chart

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.password_is?(password)
    nil
  end

  def self.generate_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def password_is?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_token
    ensure_session_token_uniqueness
    save
    session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_token
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = User.generate_token
    end
  end
end
