require 'spec_helper'

feature 'user signs up', %{

} do

  scenario 'specify valid and required info' do
    visit root_path
    click_link 'Sign Up'
    fill_in 'Email', with: 'user@example.com'
    fill_in 'Password', with: 'password'
    fill_in 'Password Confirmation', with: 'password'
    click_button 'Sign Up'

    expect(page).to have_content("Sign Up Successful!")
    expect(page).to have_content("Sign Out")
  end

  scenario 'required info not supplied'

  scenario 'password confirmation does not match'

end
