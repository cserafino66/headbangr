class Comment < ApplicationRecord
  belongs_to :concert
  belongs_to :user
  validates :text, presence: true, length: { maximum: 1000, message: 'must be less than 1000 characters' }
  validates :text, length: { minimum: 10, message: 'must be at least 10 characters' }
end
