package com.vwo.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import java.time.Duration;

public class VWOLoginTest {
    WebDriver driver;

    @BeforeMethod
    public void setUp() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://app.vwo.com/#/login");
    }

    @Test(description = "Verify that invalid login shows error message")
    public void testInvalidLogin() {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        // Locate and interact
        driver.findElement(By.id("login-username")).sendKeys("invalid@example.com");
        driver.findElement(By.id("login-password")).sendKeys("wrongpassword");
        driver.findElement(By.id("js-login-btn")).click();

        // Wait for error message
        WebElement errorMsg = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("js-notification-box-msg")));

        // Assertion
        Assert.assertEquals(errorMsg.getText(), "Your email, password, IP address or location did not match our records.");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
