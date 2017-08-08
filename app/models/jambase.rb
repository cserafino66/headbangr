class Jambase
  include HTTParty

  TOKEN = "aggz2n9p2engnfa2fynn4gah"

  def self.base_url
    "http://api.jambase.com/events"
  end

  def self.get_events(zip_code)
    url = "#{base_url}?zipCode=#{zip_code}&api_key=#{TOKEN}"
    data = HTTParty.get(url, {format: :json})
    concerts = []
    data["Events"].each do |event|
      concert = Concert.find_or_create_by(
        jambase_id: event["Id"],
        artist: event["Artists"][0]["Name"],
        venue: event["Venue"]["Name"],
        start_date: event["Date"],
        ticket_url: event["TicketUrl"])

        concerts << concert
    end

    return concerts

  end
end
