require 'httparty'
class ConcertsController < ApplicationController
  def index
    @concerts = Concert.all
  end

  def show
    @concert = Concert.find(params[:id])
  end
end

# params[:zip_code] or whatever
# url = ""http://api.jambase.com/events\?api_key\=aggz2n9p2engnfa2fynn4gah\&zipCode\=#{zip_code}""

#HTTParty.get(url) => list of all concerts

variable = response.body
