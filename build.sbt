lazy val `group` =
  (project in file("."))
    .aggregate(`domain`, `game`)

lazy val `domain` = project in file(".") / "modules" / "domain"
lazy val `game` = project in file(".") / "modules" / "game" dependsOn (`domain`)

ThisBuild / Test / testOptions += Tests.Argument("-oD")
ThisBuild / IntegrationTest / testOptions += Tests.Argument("-oD")
