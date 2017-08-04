# require 'httparty'
class ConcertsController < ApplicationController
  def index
    response = Jambase.get_events("02135")
    events = response.parsed_response["Events"]

    #Logic may need to move elsewhere
    concert_list = []
    events.each do |event|
      artist = event["Artists"][0]["Name"]
      location = "#{event["Venue"]["Name"]}, #{event["Venue"]["Address"]}, #{event["Venue"]["City"]}, #{event["Venue"]["State"]}"
      start_date = event["Date"]
      ticket_url = event["TicketURL"]
      concert_list << Concert.create(
        artist: artist,
        location: location,
        start_date: start_date,
        ticket_url: ticket_url
      )
    end

    @concerts = concert_list
  end

  def show
    @concert = Concert.find(params[:id])
  end
end
