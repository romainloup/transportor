# Set the working directory
setwd("/Users/yourUserName/otpServ") # choose the location of your server
library(opentripplanner)
otp = paste0(getwd(), "/otp-1.4.0-shaded.jar")
graphdir <- paste0(getwd(), "/graphs/default")
# Allocate the RAM (in Mo) and set the name of the router, possible to allocate less
otp_setup(otp, getwd(), memory = 10000, router = "default")