package cwiczenia9

object nbd9 {
  def nbd(args: Array[String]): Unit = {
    
    println("task1")
    
    val container1 = new Cont[String]("55")
    println(cont1.getContent)
    def applyC (a:String) = a.toDouble
    println(cont1.applyFunction[Double](applyC))


    println()
    
    println("task2")
    
    val no = new No
    val yes = new Yes[Int](5)
    println(no.isInstanceOf[MB[Object]])
    println(yes.isInstanceOf[MB[Object]])

    println()
    
    println("task3")
    
    def applyYesNo (a:Int) = a.toDouble
    val yes1 = yes.applyFunction[Double](applyYesNo)
    val no1 = no.applyFunction[Double](applyYesNo)
    println(yes.getValue)
    println(yes1.getValue)
    println(yes1.getClass)
    println(no1.getClass)

    println()
    
    println("task4")
    
    println(yes.getOrElse(8))
    println(no.getOrElse(555))
  }

}
