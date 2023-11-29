const database = {
    fish: [
        {
            name:"Name: Bill",
            species:"alligator-gar",
            length:3, 
            image:'https://tinyurl.com/44xymwav',
            location:"N",
            food:"You",
        },
        {
            image:"https://tinyurl.com/4wcmcpkx",
            species:"Lobster",
            length:15, 
            location:"FL",
            name: "Pierre",
            food: "Wine",
        },
        {
            image:"https://tinyurl.com/5h7d6wrf",
            species:"dolphin-mahi-mahi",
            length:8,
            location:"CA",
            name: "Jim",
            food:  "Tears of sailors long dead",
        },
        {
            image:"https://tinyurl.com/mtrex3du",
            species:"dolphin-mahi-mahi",
            length:9, 
            location:"CA",
            name: "Jim",
            food:  "Tears of sailors long dead",
        },
        {
            image:"https://tinyurl.com/3yw6mv9j",
            species:"dolphin-mahi-mahi",
            length:12,
            location:"CA",
            name: "Jim",
            food:  "Tears of sailors long dead",
        },
        {
            image:"https://tinyurl.com/mryzdwfn",
            species:"dolphin-mahi-mahi",
            length:16,
            location:"CA",
            name: "Jim",
            food:  "Tears of sailors long dead",
        },
        {
            image:"https://tinyurl.com/mtfunv2f",
            species:"dolphin-mahi-mahi",
            length:3, 
            location:"CA",
            name: "Jim",
            food:  "Tears of sailors long dead",
        },
        {
            image:"https://tinyurl.com/mwt94r79",
            species:"dolphin-mahi-mahi",
            length:30,
            location:"CA",
            name: "Jim",
            food:  "Tears of sailors long dead",
        },
        {
            image:"https://tinyurl.com/ynmmhcv5",
            species:"dolphin-mahi-mahi",
            length:4,
            location:"CA",
            name: "Jim",
            food:  "Tears of sailors long dead",
        },
        {
            image:"https://tinyurl.com/yck8d3wy",
            species:"dolphin-mahi-mahi",
            length:6,
            location:"Location: CA",
            name: "Jim",
            food:  "Tears of sailors long dead",
        },
        {
            image:"https://tinyurl.com/454p4j96",
            species:"dolphin-mahi-mahi",
            length:5,
            location:"CA",
            name: "Jim",
            food:  "Tears of sailors long dead",
        },
        {
            image:"https://tinyurl.com/2mf3jvj6",
            species:"dolphin-mahi-mahi",
            length:25,
            location:"CA",
            name: "Jim",
            food:  "Tears of sailors long dead",
        },
        {
            image:"https://tinyurl.com/32ze9zec",
            species:"dolphin-mahi-mahi",
            length:3,
            location:"CA",
            name: "Jim",
            food:  "Tears of sailors long dead",
        },
        {
            image:"https://tinyurl.com/2s3du7kh",
            species:"dolphin-mahi-mahi",
            length:19,
            location:"CA",
            name: "Jim",
            food:  "Tears of sailors long dead",
        },
        {
            image:"https://tinyurl.com/53c3uyzv",
            species:"dolphin-mahi-mahi",
            length:2,
            location:"CA",
            name: "Jim",
            food:  "Tears of sailors long dead",
        },
        {
            image:"https://tinyurl.com/5n7tryyb",
            species:"dolphin-mahi-mahi",
            length:12,
            location:"Location: CA",
            name: "Jim",
            food:  "Tears of sailors long dead",
        },
        {
            image:"https://tinyurl.com/yc3turp7",
            species:"dolphin-mahi-mahi",
            length:9,
            location:"Location: CA",
            name: "Jim",
            food: "Tears of sailors long dead",
        },
    ],
    tips: [
        {   
            image:"https://www.un.org/sites/un2.un.org/files/action_01_1.png",
            tip:"Feed fish",
            trick:"With hand",  
        },
        {
            image:"https://tinyurl.com/s33thwju",
            tip:"Play with fish",
            trick:"Don't actually do this",  
        },
        {
            image:"https://tinyurl.com/y32d5d4e",
            tip:"Give love to fish",
            trick:"They wont care",  
        },
       
    ],
    location: [
        {   
            image:"https://tinyurl.com/3aedbj8f",
            location:"Key west",
            when:"06/10/19",
            whatfish:"jay"
        },
        {
            image:"https://tinyurl.com/4npzvsja",
            location:"California",
            when:"04/19/23",
            whatfish:"jimmy"
        },
        {
            image:"https://tinyurl.com/446z3bv2",
            location:"Caribbean",
            when:"01/02/20",
            whatfish:"jim"
        },
    ]
}

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};

export const getTips = () => {
    return database.tips.map((tips) => ({ ...tips }));
  };

  export const getLocation = () => {
    return database.location.map((location) => ({ ...location }));
  };
  
  