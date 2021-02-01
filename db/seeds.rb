PlantType.destroy_all
Plant.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

puts "#{User.count} users created"

@boba = Plant.create!(name: 'boba', user: @admin)
@djin = Plant.create!(name: 'djin', user: @admin)
@yoda = Plant.create!(name: 'yoda', user: @admin)

puts "#{Plant.count} plants created"

@fern = PlantType.create!(name: 'fern')
@cactus = PlantType.create!(name: 'cactus')
@succulent = PlantType.create!(name: 'succulent')
@ivy_and_vines = PlantType.create!(name: 'ivy and vines')
@cycads = PlantType.create!(name: 'cycads')
@flowering = PlantType.create!(name: 'flowering')
@tropical = PlantType.create!(name: 'araceae')



puts "#{PlantType.count} plant types created"

@boba.plant_types.push(@succulent)
@djin.plant_types.push(@tropical)
@yoda.plant_types.push(@cactus)