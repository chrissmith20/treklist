u1 = User.create(username: "Ricky Bobby", email: "ricky@bobby.com", password: "notfirstlast" )
u2 = User.create(username: "Itraveler", email: "ron@swan.com", password: "survival" )
u3 = User.create(username: "TommyFresh", email: "entertainment@720.com", password: "dollarbills" )

d1 = Destination.create(location: "Pyramids", description: "Got to see a mummy!", latitude: 42.7122, longitude: 70.7112, google_places_place_id: "HYIJKf4ofIlw44kRioRR8ajDNI4", user: u1)
d2 = Destination.create(location: "Golden Gate Bridge", description: "First time going to the West Coast!", latitude: 30.7128, longitude: 70.7124, google_places_place_id: "ChIJKf4ofIlw45YRioRR8ajDNI4", user: u2)
d3 = Destination.create(location: "Vancouver", description: "Butterfly garden is calling my name!", latitude: 35.0128, longitude: 70.0028, google_places_place_id: "ChIJKf4oR9SIlw44kRioR8ajDNI", user: u3)
