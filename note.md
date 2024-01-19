 # Overview
 Crucial
 - ORM/ODM
 - Connection
 - Model
 - CRUD
 - Schema COnstraints
 Important
 - Middleware
 - Methods
 Nice to Have
 - Virtuals

# Mongoose
- ORM/ODM -> Object data mapper
  - Driver to connect Node and Mongoose

# Connection
- Probable error:
  - mongoose.connect('mongodb://127.0.0.1:27017/your_database_name_here')
  - mongoose.set('strictQuery', true);

# Schema
- look documentation

# Model
- look documentation

# Save to DB from node
- .load <textName>
- <modelName>.save()
  - How to update?
    - Change the model
    - .save again

# Insert
- <Model>.insertMany([{..},{..},...])