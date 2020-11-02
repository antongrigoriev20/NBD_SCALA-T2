object Main extends App {

  println("Task1")
  def getDescriptionForWeekDayName(day: String): String = day.toLowerCase match  {
    case "monday" => "Work"
    case "tuesday" => "Work"
    case "wednesday" => "Work"
    case "thursday" => "Work"
    case "friday" => "Work"
    case "saturday" => "Weekend"
    case "sunday" => "Weekend"
    case _ => "No such day"
  }
  println(getDescriptionForWeekDayName("Tuesday"))
  println(getDescriptionForWeekDayName("Saturday"))
  println(getDescriptionForWeekDayName("MonFriday"))

  println("Task2")
  class BankAccount(val currentBalance: Double) {
    def this() {
      this(0)
    }
    override def toString = s"BankAccount($currentBalance)"
  }
  var BankAccount1 = new BankAccount()
  var BankAccount2 = new BankAccount(1000)
  println(BankAccount1.toString)
  println(BankAccount2.toString)

  println("Task3")
  class Person(var firstName: String, var lastName: String)
  var Person1 = new Person("Anton", "Hryhoriev")
  var Person2 = new Person("Dmitry", "Grigoriev")
  var Person3 = new Person("Tatyana", "Hryhorieva")
  def greetPerson(person: Person): String = person.lastName match {
    case "Hryhoriev" => "Good afternoon Anton Hryhoriev"
    case "Grigoriev" => "Hello Dmitry Hryhoriev"
    case "Hryhorieva" => "Nice to see you Tatyana Hryhorieva"
    case _ => "Good afternoon" + person.firstName + "" + person.lastName
  }
  println(greetPerson(Person1))
  println(greetPerson(Person2))
  println(greetPerson(Person3))

  println("Task4")
  def sqr(wrt: Int): Int = wrt * wrt
  def sqrThree(wrt: Int, func: Int => Int) = {
    func(func(func(wrt)))
  }
  println(sqrThree(2, sqr))

  println("Task5")
  class Person(val firstName: String, val lastName: String, val taxToPay: Double){
    def this(firstName: String, lastName: String){
      this(firstName, lastName, 0)
    }
  }
  trait Employee extends Person {
    val salary = 0
    def this(firstName: String, lastName: String, _salary: Double){
      this(firstName, lastName)
      this.salary = _salary
    }
  }
  trait Student extends Person {
    override def taxToPay: Double = 0
  }
  trait Teacher extends Employee {
    override def taxToPay: Double = salary * 0.1
  }
  val employee = new Person("Anton", "Hryhoriev", 10) with Employee
}