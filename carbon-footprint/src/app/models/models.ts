
export class Models{
  public static VehicleClasses:String[] = ["","CLASS1","CLASS2","CLASS3","AVERAGE","RIGID","ARTICULATED","MOTORCYCLE"]
  public static FuleTypes:String[] = ["","PETROL","DIESEL","CNG","LPG","BATTERY"]
  public static ConsumerTypes:String[] = ["","Medium Meat Eater","Heavy Meat Eater","Vegetarian & Pescatarian","Vegan","Light Meat Eater"]
}

export class FootprintResult{
  title:string = ""
  result:number = 0
  date:string = Date.now().toString()
}
