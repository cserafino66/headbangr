class MyconcertsController < ApplicationRecord
  def index
    render template: 'static_pages/index'
  end


end
