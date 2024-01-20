TODO How git best usage is? 
TODO What file and folder should be ignored? 

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

# Insert straight to DB
- <Model>.insertMany([{..},{..},...])
  - no need to .save

# Finding
- <Model>.find({})      -> Return <<Query>>
  - must use .then()
    - <Model>.find({<key>:<value>}).then(data => console.log(data))
- <Model>.find({_id: <id>}).then((data)=>console.log(data))    
- <Model>.findById(<id>)
- <Model>.findOne(...)

# About "Promise" in mongoose
- Return type <<Query>> is an "then-able" object

# Update
This function don't return the actual data. Only the "promise" <<Query>>.
- <Model>.updateOne({<...find>}, {<...replace>})
- <Model>.updateMany({<...find>}, {<...replace>})

# Find and Update
This function return the before-updated data.
- findOneAndUpdate({<...find>}, {<...replace>}, <option>)
  - change <option> to `{new: true}`
- findManyAndUpdate()

# Remove
- deleteOne
- deleteMany
- findOneAndDelete

# Schema Validation
```js
{
  <key1>: {
    <options1>: <value>,
    <options2>: <value>,
    ...
  },
  <key2>: {
    <options1>: <value>,
    <options2>: <value>,
    ...
  },
  ...
}
```
- <options>:
  - type
  - required
  - default
  - maxLength
  - uppercase
  - match -> RegExp
  - min
  - max
  - enum -> Work on string type. Validate if those string is in an passed argument string

# Validating Update
- <Models>.<function>(<>,<>,{runValidator: true})

# Error Validation Syntax
- <options> : [<value>, <errorMsg>]

# Adding Method to the Models
- Model Instances Method -> via adding prototype
  - <Schema>.methods.<functionName> = function(...) {...}
- Model Static Method -> via Class <Models> name calling
  - <Models>.statics.<functionName> = function(...) {...}

# Mongoose Virtuals
- <Schema>.virtual("<propertiesName>").get(function(){return ...})
  - Treat the virtuals as a properties inside an instances.
  - Virtuals exist in mongoose
- Set could also be declared. -> See more in the documentations 

# Mongoose Middleware
Used to execute automated processes after a specific action has been done
```
personSchema.pre("save", async function () {
	this.first = "Hello";
	this.last = "World";
	console.log("About to save!");
});

personSchema.post("save", async function () {
	console.log("Just Saved!");
});
```
  - Pre
  - Post
See more in the documentation
