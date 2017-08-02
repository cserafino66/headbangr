class Concert < ApplicationRecord
  validates :artist, presence: true
  validates :venue, presence: true
  validates :location, presence: true
  validates :start_date, presence: true
end
