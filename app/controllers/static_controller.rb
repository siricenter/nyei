class StaticController < ApplicationController
	require 'solareventcalculator'
	require 'geokit'
	def landing

		@page = :home  
		@time = Time.new
		year = @time.year
		month = @time.month
		day = @time.day
		string = "#{year}-#{month}-#{day}"
		date = Date.parse(string)
		#user_location = IpGeocoder.geocode(request.remote_ip)
		#@calc = SolarEventCalculator.new(date, BigDecimal.new(user_location.lat), BigDecimal.new(user_location.lng))

		#@sunrise = calc.compute_utc_official_sunrise
		#put "#{sunrise}"

	end

	def methodology

	end

	def courses_offered

	end

	def travel_opportunities

	end

	def about_us
		
	end

	def contact_us
		
	end

	def work_with_us

	end

	def faq

	end
end
