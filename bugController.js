import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:23456789,
        name:"Crash on Load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"v2.0",
        assigned:"ACS",
        creator:"Joe Bloggs",
        priority:1,
        time:"19:18",
    }))
    data.push(new bugModel({
        _id:23456789,
        name:"Wont Load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"v2.0",
        assigned:"ACS",
        creator:"Joe Bloggs",
        priority:3,
        time:"19:18",
    }))

    let sorted =data.sort((a,b)=>{return a.priority = b.prority})
    return sorted;
}
