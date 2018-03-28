# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

todo1 = Todo.create({ title: "write", body: "three paragraphs", done: false})
todo2 = Todo.create({ title: "read", body: "four paragraphs", done: false})
todo3 = Todo.create({ title: "draw", body: "five figures", done: false})
todo4 = Todo.create({ title: "run", body: "six laps", done: false})
