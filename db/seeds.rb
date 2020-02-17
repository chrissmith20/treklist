u1 = User.create(username: "Ricky Bobby", email: "ricky@bobby.com", password: "notfirstlast" )
u2 = User.create(username: "Itraveler", email: "ron@swan.com", password: "survival" )
u3 = User.create(username: "TommyFresh", email: "entertainment@720.com", password: "dollarbills" )

d1 = Destination.create(title: "Pyramids", description: "Got to see a mummy!", user: u1)
d2 = Destination.create(title: "Golden Gate Bridge", description: "First time going to the West Coast!", user: u2)
d3 = Destination.create(title: "Vancouver", description: "Butterfly garden is calling my name!", user: u3)
