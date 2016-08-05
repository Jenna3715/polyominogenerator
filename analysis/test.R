library(ggplot2)

num <- c(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)
value <- factorial(num)
data <- data.frame(num, value)

data$logvalue <- log(data$value)

exponentialModel <- lm(data$logvalue ~ data$num)

typevalues <- seq(0, 10, 0.1)
logtimeExponential <- exp(predict(exponentialModel, list(num = typevalues)))
timeExponential <- predict(exponentialModel, list(num = typevalues))

b <- ggplot()
b <- b + geom_smooth(mapping = aes(x = data$num, y = logtimeExponential)) 
b <- b + geom_point(mapping = aes(x = data$num, y = data$value)) 
b <- b + labs(title = "f(x) vs x- Proving my hypothesis wrong", x = "x", y = "f(x)")
b + scale_x_continuous(breaks=seq(0,10,1))

c <- ggplot()
c <- c + geom_smooth(mapping = aes(x = data$num, y = timeExponential)) 
c <- c + geom_point(mapping = aes(x = data$num, y = data$logvalue))
c <- c + labs(title = "log f(x) vs x", x = "x", y = "log(f(x))")
c + scale_x_continuous(breaks=seq(0,10,1))