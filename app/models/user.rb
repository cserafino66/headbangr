class User < ApplicationRecord
  has_many :comments
  has_many :myconcerts
  has_many :concerts, through: :myconcerts

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
