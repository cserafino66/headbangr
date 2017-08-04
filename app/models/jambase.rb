class Jambase
  include HTTParty

  TOKEN = "aggz2n9p2engnfa2fynn4gah"
  def self.base_url
    "http://api.jambase.com/events"
  end

  def self.get_events(zip_code)
    zip_code.to_s
    url = "#{base_url}?zipCode=#{zip_code}&api_key=#{TOKEN}"
    puts url
    HTTParty.get(url, {format: :json})
  end

end