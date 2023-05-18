const darkThresh = -.1;
const normThresh = -.05;
const lightThresh = 0

export function GetBackgroundColor(value: number): string{
    if(value < darkThresh)
        return 'darkgreen';
    else if(value < normThresh)
        return 'green';
    else if(value <= lightThresh)
        return 'lightgreen';
    else if(value > -darkThresh)
        return 'darkred';
    else if(value > -normThresh)
        return 'red';
    else if(value > -lightThresh)
        return 'pink';

    return 'blue';
}
export function GetFontColor(value: number): string{
    if(value < darkThresh)
        return 'white';
    else if(value < normThresh)
        return 'white';
    else if(value <= lightThresh)
        return 'black';
    else if(value > -darkThresh)
        return 'white';
    else if(value > -normThresh)
        return 'white';
    else if(value > -lightThresh)
        return 'black';

    return 'white';
}
