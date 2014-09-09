Rails.application.routes.draw do
	root 'static#landing'
	get "/methodology", to: "static#methodology", as: :methodology_page
	get "/courses_offered", to: "static#Courses", as: :courses_offered
	get "/travel_opportunities", to: "static#travel", as: :travel_opportunities
	get "/teachers", to: "static#teachers", as: :teachers_page
	get "/about_us", to: "static#about", as: :about_us
	get "/contact_us", to: "static#contact", as: :contact_us
	get "/work_with_us", to: "static#work_with_us", as: :work_with_us
	get "/faq", to: "static#faq", as: :faq_page
  get "/register", to: "static#register", as: :register_page
	

	# The priority is based upon order of creation: first created -> highest priority.
	# See how all your routes lay out with "rake routes".

	# You can have the root of your site routed with "root"
	# root 'welcome#index'

	# Example of regular route:
	#   get 'products/:id' => 'catalog#view'

	# Example of named route that can be invoked with purchase_url(id: product.id)
	#   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

	# Example resource route (maps HTTP verbs to controller actions automatically):
	#   resources :products

	# Example resource route with options:
	#   resources :products do
	#     member do
	#       get 'short'
	#       post 'toggle'
	#     end
	#
	#     collection do
	#       get 'sold'
	#     end
	#   end

	# Example resource route with sub-resources:
	#   resources :products do
	#     resources :comments, :sales
	#     resource :seller
	#   end

	# Example resource route with more complex sub-resources:
	#   resources :products do
	#     resources :comments
	#     resources :sales do
	#       get 'recent', on: :collection
	#     end
	#   end

	# Example resource route with concerns:
	#   concern :toggleable do
	#     post 'toggle'
	#   end
	#   resources :posts, concerns: :toggleable
	#   resources :photos, concerns: :toggleable

	# Example resource route within a namespace:
	#   namespace :admin do
	#     # Directs /admin/products/* to Admin::ProductsController
	#     # (app/controllers/admin/products_controller.rb)
	#     resources :products
	#   end
end
