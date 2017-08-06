class Myconcert < ApplicationRecord
  belongs_to :user
  belongs_to :concert

  validates :jambase_id, presence: true, numericality: true
  validates :artist, presence: true
  validates :venue, presence: true
  validates :start_date, presence: true
  validates :ticket_url, presence: true
end
