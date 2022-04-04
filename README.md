# Ajax Search Type Ahead

### Building the Intuition / Flow

1. Fetch the data then convert to blob convert to json() . then convert to data
2. push the spread data into the array var
3. matchfinding function that return cities.filter using new regex
4. find and return the cities or the states that match place.city.match(regex)
5. attach event listener to the search elements for 'change' & 'keyup' events
6. Use findMatch function in the displayMatch finding this.value in the cities array
7. ```Get your data first, get all your functionality in place - then worry about hooking it up to event listeners as well as creating the html we need```
8. map over the found array and return the html element convert the array to html code with join(" ")
9. to inserthtml into the suggestions
10. create a regex to search the searched word in the foundarray and highlight it with .replace
 and state name too

### learnings
- Fetch returns a promise .then fetches a blob of data, blob.json() returns another promise which then returs data
- creating a reg exp to filter the big array