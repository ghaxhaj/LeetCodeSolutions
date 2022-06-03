import java.util.*;

class Main {

  private static class Student{
    int id;
    String name;
    double cgpa;

    Student(int id, String name, double cgpa){
      this.id = id;
      this.name = name; 
      this.cgpa = cgpa;
    }

    int getId(){
      return this.id;
    }

    String getName(){
      return this.name;
    }

    double getCGPA(){
      return this.cgpa;
    }
  }

   static void sortStudentList(List<Student> students){
      for(int i = 0; i < students.size(); i++){
        Student temp = students.get(i);
        for(int j = i + 1; j < students.size(); j++){
          if(students.get(j).getCGPA() > temp.getCGPA()){
            students.set(i, students.get(j));
            students.set(j, temp);
          }

          if(students.get(j).getCGPA() == temp.getCGPA()){
            if(students.get(j).getName().compareTo(temp.getName()) < 0){
               students.set(i, students.get(j));
               students.set(j, temp);
            }
          }
        }
      }
    }

  private static class Priority{
    List<Student> students = new ArrayList<Student>();

    Priority(){
      
    }

    List<Student> getStudents(List<String> event){
      
      for(int i = 0; i < event.size(); i++){
        String[] temp = event.get(i).split(" ");
        
        if(temp[0].compareTo("ENTER") == 0){
          Student student = new 
          Student(Integer.parseInt(temp[3]), temp[1], 
          Double.parseDouble(temp[2]));
          this.students.add(student);
          sortStudentList(this.students);
        }

        else if(temp[0].compareTo("SERVED") == 0){
          this.students.remove(0);
        }

        else{
          System.out.println("The command: " + event.get(i)  + " is not a valid command");
        }
      }
    

    return this.students;

  
  }}

  static void printResults(List<Student> results){
    for(int i = 0; i < results.size(); i++){
      System.out.println(
        results.get(i).getName() + " " +
        results.get(i).getCGPA() + " " + 
        results.get(i).getId()
      );
    }
  }

  
  public static void main(String[] args) {
    
    Scanner scnr = new Scanner(System.in);
    
    System.out.println("Welcome To Priority Queue! Please enter the number of commands you will be inputting!");
    
    int listSize = scnr.nextInt();
    
    List<String> commands = new ArrayList<String>();

    System.out.println("Please enter " + listSize + " commands. These commands must be in the format of 'ENTER name CGPA id' or 'SERVED'.");
    
    for(int i = 0; i <= listSize; i++){
      String command = scnr.nextLine();
      commands.add(command);
    }

    

    scnr.close();
    commands.remove(0);

    Priority test = new Priority();

    List<Student> result = test.getStudents(commands);
    
    printResults(result);
    /*
     SAMPLE INPUT: 
12
ENTER John 3.75 50
ENTER Mark 3.8 24
ENTER Shafaet 3.7 35
SERVED
SERVED
ENTER Samiha 3.85 36
SERVED
ENTER Ashley 3.9 42
ENTER Maria 3.6 46
ENTER Anik 3.95 49
ENTER Dan 3.95 50
SERVED
     */

     /*
      SAMPLE OUTPUT:
Dan 3.95 50
Ashley 3.9 42
Shafaet 3.7 35
Maria 3.6 46
      */
    
  }
}
