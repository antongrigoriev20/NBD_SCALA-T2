package cwiczenia9

class Cont[A](value:A) {
  private var _value:A = value
  def getContent: A = _value
  def applyFunction[R](f:A=>R): R ={f(_value)}
}


