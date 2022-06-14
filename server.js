const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "helloworld",
		fields: () => ({
			message: {
				type: GraphQLString,
				resolve: () => "Hello world",
			},
		}),
	}),
});

const app = express();

app.use(
	"/graphql",
	graphqlHTTP({
		graphiql: true,
		schema: schema,
	})
);
app.listen(5000, () => console.log("server is running"));
