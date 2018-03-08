
/**
* Write a TemplateEngine class. Its constructor should accept a 
* template string, and it should have a "format" method, which 
* accepts a data object. The format method should return the 
* formatted template string.
*/

class TemplateEngine {
    //Your code here
    constructor(temp) {
        this.temp = temp;
    }

    format(...args) {
        let pass = args[0];
        //   let {name, age} =  args[0];
        //   name
        //   age

        let result = this.temp.replace(/\<\%(.*?)\%\>/g, function (i, match) {
            return pass[match];
        });

        return result;
    }
}

const template = '<p>Hello, my name is <%name%>. I\'m <%age%> years old.</p>';
const templateEngine = new TemplateEngine(template);

const example1 = templateEngine.format({
    name: 'Tim',
    age: 24
});

const example2 = templateEngine.format({
  name: 'Suzanna',
  age: 44
});

const example3 = templateEngine.format({
  name: 'Rahul',
  favorite_color: 'light beige'
});

const template2 = '<p>Hello, my name is <%name%>. My favorite color is <%favorite_color%></p>';
const templateEngine2 = new TemplateEngine(template2);
const example4 = templateEngine2.format({
  name: 'Rahul2',
  favorite_color: 'light beige'
});

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
