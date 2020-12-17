const { v4: uuidv4 } = require('uuid');
let items = [
    {
        id      :uuidv4(),
        name    :"abc Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c",
        level   :0             //0 small ,1 medium, 2 High
    },
    {
        id      :uuidv4(),
        name    :"def Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c",
        level   :1             //0 small ,1 medium, 2 High
    },
    {
        id      :uuidv4(),
        name    :"qwe Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c",
        level   :2             //0 small ,1 medium, 2 High
    },
    {
        id      :uuidv4(),
        name    :"fhgf Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c",
        level   :1             //0 small ,1 medium, 2 High
    }
];
export default items;