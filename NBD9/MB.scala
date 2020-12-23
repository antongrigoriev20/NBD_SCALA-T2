package cwiczenia9

trait  MB[A]  {}

class No extends MB[Nothing]{
  def applyFunction[R](f:Nothing=>R): MB[Nothing] ={new No}
  def getOrElse[B >: Nothing](default: ⇒ B): B = default
}

 class Yes[A](value:A) extends MB[A] {
  var _value:A = value
  def getValue = _value
  def applyFunction[R](f:A=>R): Yes[R] ={new Yes[R](f(_value))}
  def getOrElse[B >: A](default: ⇒ B): A=value
}

