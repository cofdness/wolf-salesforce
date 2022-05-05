# wolf-salesforce v0.0.0



- [Book](#book)
	- [Create book](#create-book)
	- [Delete book](#delete-book)
	- [Retrieve book](#retrieve-book)
	- [Retrieve books](#retrieve-books)
	- [Update book](#update-book)
	
- [Customer](#customer)
	- [Create customer](#create-customer)
	- [Delete customer](#delete-customer)
	- [Retrieve customer](#retrieve-customer)
	- [Retrieve customers](#retrieve-customers)
	- [Update customer](#update-customer)
	
- [ZaloUser](#zalouser)
	- [Create zalo user](#create-zalo-user)
	- [Delete zalo user](#delete-zalo-user)
	- [Retrieve zalo user](#retrieve-zalo-user)
	- [Retrieve zalo users](#retrieve-zalo-users)
	- [Update zalo user](#update-zalo-user)
	


# Book

## Create book



	POST /books


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| author			| 			|  <p>Book's author.</p>							|

## Delete book



	DELETE /books/:id


## Retrieve book



	GET /books/:id


## Retrieve books



	GET /books


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update book



	PUT /books/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| author			| 			|  <p>Book's author.</p>							|

# Customer

## Create customer



	POST /customers


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Customer's name.</p>							|
| phone			| 			|  <p>Customer's phone.</p>							|
| nickname			| 			|  <p>Customer's nickname.</p>							|

## Delete customer



	DELETE /customers/:id


## Retrieve customer



	GET /customers/:id


## Retrieve customers



	GET /customers


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update customer



	PUT /customers/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Customer's name.</p>							|
| phone			| 			|  <p>Customer's phone.</p>							|
| nickname			| 			|  <p>Customer's nickname.</p>							|

# ZaloUser

## Create zalo user



	POST /zaloUsers


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Zalo user's name.</p>							|
| phone			| 			|  <p>Zalo user's phone.</p>							|
| accessToken			| 			|  							|
| instanceUrl			| 			|  							|

## Delete zalo user



	DELETE /zaloUsers/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| accessToken			| 			|  							|
| instanceUrl			| 			|  							|

## Retrieve zalo user



	GET /zaloUsers/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| accessToken			| 			|  							|
| instanceUrl			| 			|  							|

## Retrieve zalo users



	GET /zaloUsers


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| accessToken			| 			|  							|
| instanceUrl			| 			|  							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update zalo user



	PUT /zaloUsers/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Zalo user's name.</p>							|
| phone			| 			|  <p>Zalo user's phone.</p>							|
| accessToken			| 			|  							|
| instanceUrl			| 			|  							|


