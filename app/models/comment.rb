class Comment < ApplicationRecord
  belongs_to :concert
  belongs_to :user
  validates :jambase_id, presence: true, numericality: true
  validates :text, presence: true, length: { maximum: 1000 }
end
