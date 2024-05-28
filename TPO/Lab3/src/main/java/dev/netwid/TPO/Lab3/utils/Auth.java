package dev.netwid.TPO.Lab3.utils;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Auth {
    public static void auth(WebDriver driver) {
        // 1 | open | / |
        driver.get("https://www.lamoda.ru//");
        // 2 | setWindowSize | 1900x1000 |
        driver.manage().window().setSize(new Dimension(1900, 1000));
        // 3 | click | xpath=//button |
        // click Войти button
        driver.findElement(By.xpath("//button")).click();
        // 4 | waitForElementPresent | xpath=//form/div[2]/div/div/div/div | 30000
        // wait email field
        {
            WebDriverWait wait = new WebDriverWait(driver, 30);
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//form/div[2]/div/div/div/div")));
        }
        // 5 | click | xpath=//form/div[2]/div/div/div/div |
        // click email field
        driver.findElement(By.xpath("//form/div[2]/div/div/div/div")).click();
        // 6 | click | xpath=//div[2]/div/div/div/div/div[2]/input |
        // click email input
        driver.findElement(By.xpath("//div[2]/div/div/div/div/div[2]/input")).click();
        // 7 | type | xpath=//div[2]/div/div/div/div/div[2]/input | rotile3904@facais.com
        // type in email input
        driver.findElement(By.xpath("//div[2]/div/div/div/div/div[2]/input")).sendKeys("rotile3904@facais.com");
        // 8 | click | xpath=//form/div[3]/div/div/div |
        // click password field
        driver.findElement(By.xpath("//form/div[3]/div/div/div")).click();
        // 9 | click | xpath=//div[3]/div/div/div/div/div[2]/input |
        // click password input
        driver.findElement(By.xpath("//div[3]/div/div/div/div/div[2]/input")).click();
        // 10 | type | xpath=//div[3]/div/div/div/div/div[2]/input | tf%zRv4dQ)-WWB-
        // type password
        driver.findElement(By.xpath("//div[3]/div/div/div/div/div[2]/input")).sendKeys("tf%zRv4dQ)-WWB-");
        // 11 | click | xpath=//div[5]/button |
        // click Войти button
        driver.findElement(By.xpath("//div[5]/button")).click();
        // 12 | waitForElementPresent | xpath=//a[contains(.,'Профиль')] | 30000
        {
            WebDriverWait wait = new WebDriverWait(driver, 30);
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(.,\'Профиль\')]")));
        }
    }
}
