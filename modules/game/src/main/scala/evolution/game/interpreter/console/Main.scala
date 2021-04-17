package evolution.game.interpreter.console

@main def hello: Unit = {
    import scala.io.Source

    val filename = "pepe"

    val lines = Source.fromFile(filename).getLines.mkString("\n").replace(
        """
          |#!/bin/bash
          |echo -en '[2J'
          |echo -en '[0;0H'
          |""".stripMargin, "")
      .replace("sleep 0.033", "")

    for (line <- lines.split("sleep")) {
        //Runtime.getRuntime().exec("clear");
        Thread.sleep(5003)
        println(line)

    }
    println(msg)
}

def msg = "I was compiled by Scala 3. :)"
