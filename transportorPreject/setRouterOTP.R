# Set the working directory
setwd("/Users/yourUserName/otpServ/") # choose the location of your server
install.packages("curl")
install.packages("remotes")
remotes::install_github("ITSleeds/opentripplanner")
library(opentripplanner)

# Set the server
otp = paste0(getwd(), "/otp-1.4.0-shaded.jar")
graphdir <- paste0(getwd(), "/graphs/default")
# Allocate the RAM (in Mo) and set the name of the router, possible to allocate less memory but it will be very slow
# Be sure to have Java insalled
otp_setup(otp, getwd(), memory = 8000, router = "default") # possible to change the port adding 'port = 8081' before the last bracket
