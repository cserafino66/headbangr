class Concert < ApplicationRecord
  has_many :comments
  has_many :myconcerts
  has_many :users, through: :myconcerts

  validates :artist, presence: true
  validates :venue, presence: true
  validates :start_date, presence: true
  validates :ticket_url, presence: true
  validates :jambase_id, presence: true, numericality: true
end
