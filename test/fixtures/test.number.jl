using Distributions
using JSON

k = 5
d = Chisq( k )

x = [ -0.4, -0.2, 0, 0.2, 0.4 ]

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("k", k),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/number.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
