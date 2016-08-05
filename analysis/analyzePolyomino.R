library(ggplot2)
polydata <- read.csv("polydata_10.csv")

polydata <- polydata[-c(1), ]
polydata$logtime <- log(polydata$time)

exponentialModel <- lm(polydata$logtime ~ polydata$polyomino.type)

typevalues <- seq(0, 10, 0.1)
logtimeExponential <- exp(predict(exponentialModel, list(polyomino.type = typevalues)))
timeExponential <- predict(exponentialModel, list(polyomino.type = typevalues))

f <- ggplot()
f <- f + geom_smooth(mapping = aes(x = polydata$polyomino.type, y = logtimeExponential)) 
f <- f + geom_point(mapping = aes(x = polydata$polyomino.type, y = polydata$time)) 
f <- f + labs(title = "Time vs n (until decominos)", x = "Type of polyomino", y = "Time (in milliseconds)")
f +  scale_x_continuous(breaks=seq(0,10,1))

h <- ggplot()
h <- h + geom_smooth(mapping = aes(x = polydata$polyomino.type, y = timeExponential)) 
h <- h + geom_point(mapping = aes(x = polydata$polyomino.type, y = polydata$logtime))
h <- h + labs(title = "log time vs n (until decominos)", x = "Type of polyomino", y = "log time")
h + scale_x_continuous(breaks=seq(0,10,1))