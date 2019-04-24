class User < ApplicationRecord
    validates :email, :password_digest, :session_token, :fname, :lname, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 1}, allow_nil: true

    after_initialize :ensure_session_token 

    attr_reader :password

    has_many :listings,
        class_name: :Listing,
        foreign_key: :host_id,
        primary_key: :id

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil 
    end

    def is_password?(password)
        bcrypt_password = BCrypt::Password.new(self.password_digest)
        bcrypt_password.is_password?(password)
    end
end