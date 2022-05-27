import java.io.File;
import java.io.FileWriter;
import java.io.FileReader;
import java.util.*;

class Main {
  
  public static void writeToFile(){
  
    File file = new File("write.txt");
    try{
      
    FileWriter fw = new FileWriter(file);
    Scanner scnr = new Scanner(System.in);
    // StringBuilder input = new StringBuilder();


    System.out.println("Welcome to the file writer! Please input characters to print to our text file.");

     
      String input = "";
     do{
       
       input = scnr.nextLine();
       
       if(!input.equals("quit")){
       fw.write(input);
       fw.write('\n');
        }
       
     }while(!input.equals("quit"));

      fw.close();

      
      }catch(Exception e){
      e.printStackTrace();
      }
}



public static void readFromFile(){
   File file = new File("write.txt");

  try{
    
   FileReader fr = new FileReader(file);
   List<Character> output = new ArrayList<Character>();
    
   do{
     output.add((char) fr.read());
     
   }while(fr.read() != -1);
    
    System.out.println("The File Reads: " + output);
 
    }catch(Exception e){
    e.printStackTrace();
    }
  
}


  
  public static void main(String[] args) {
    //writeToFile();
    readFromFile();
  }
}