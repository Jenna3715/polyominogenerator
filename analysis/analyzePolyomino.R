library(ggplot2)
polydata <- read.csv("polydata.csv")

f <- ggplot(data = polydata, aes(x = polyomino.type, y = time))

f + geom_point()

g <- ggplot(data = polydata, aes(x = polyomino.type, y = number))

g + geom_point()

polydata$logtime <- log(polydata$time)

exponentialModel <- lm(polydata$logtime ~ polydata$polyomino.type)
typevalues <- seq(0, 8, 0.1)
logtimeExponential <- exp(predict(exponentialModel, list(polyomino.type = typevalues)))

f + geom_smooth(mapping = aes(x = polydata$polyomino.type, y = logtimeExponential)) + geom_point(mapping = aes(x = polydata$polyomino.type, y = polydata$time))