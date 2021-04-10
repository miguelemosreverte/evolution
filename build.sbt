lazy val `group` =
  (project in file("."))
    .aggregate(`domain`)

lazy val `domain` =
  project in file(".") / "modules" / "domain"

ThisBuild / Test / testOptions += Tests.Argument("-oD")
ThisBuild / IntegrationTest / testOptions += Tests.Argument("-oD")
