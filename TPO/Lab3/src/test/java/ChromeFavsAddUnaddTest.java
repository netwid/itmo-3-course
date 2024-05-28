// Generated by Selenium IDE

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import dev.netwid.TPO.Lab3.utils.Auth;

import org.openqa.selenium.JavascriptExecutor;

import java.util.*;

public class ChromeFavsAddUnaddTest {
    private WebDriver driver;
    private Map<String, Object> vars;
    JavascriptExecutor js;

    @Before
    public void setUp() {
//        System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver");
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        js = (JavascriptExecutor) driver;
        vars = new HashMap<String, Object>();
    }

    @After
    public void tearDown() {
        driver.quit();
    }

    @Test
    public void favsAddUnadd() {
        Auth.auth(driver);
        // Test name: FavsAddUnadd
        // Step # | name | target | value
        // 1 | open | https://www.lamoda.ru/p/mp002xm005zs/clothes-blacksi-futbolka/ |
        driver.get("https://www.lamoda.ru/p/mp002xm005zs/clothes-blacksi-futbolka/");
        // 2 | setWindowSize | 1920x1032 |
        driver.manage().window().setSize(new Dimension(1920, 1032));
        // 3 | runScript | window.scrollTo(0,600) |
        js.executeScript("window.scrollTo(0,600)");
        // 4 | click | xpath=//div[6]/div/div/div/div |
        // close modal
        driver.findElement(By.xpath("//div[6]/div/div/div/div")).click();
        // 5 | click | xpath=//div[5]/div/div/div/div/div[2]/div |
        // click like button
        driver.findElement(By.xpath("//div[5]/div/div/div/div/div[2]/div")).click();
        // 6 | open | https://www.lamoda.ru/wishlist/ |
        driver.get("https://www.lamoda.ru/wishlist/");
        driver.get("https://www.lamoda.ru/wishlist/");
        // 7 | runScript | window.scrollTo(0,100) |
        js.executeScript("window.scrollTo(0,100)");
        // 8 | waitForElementPresent | xpath=//a/div/div/div/div | 30000
        // wait product card
        {
            WebDriverWait wait = new WebDriverWait(driver, 30);
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a/div/div/div/div")));
        }
        // 9 | mouseOver | xpath=//a/div/div/div/div |
        // mouse over product card
        {
            WebElement element = driver.findElement(By.xpath("//a/div/div/div/div"));
            Actions builder = new Actions(driver);
            builder.moveToElement(element).perform();
        }
        // 10 | click | xpath=//a/div/div/div[3]/div/div |
        // click unlike
        driver.findElement(By.xpath("//a/div/div/div[3]/div/div")).click();
        // 11 | open | https://www.lamoda.ru/wishlist/ |
        driver.get("https://www.lamoda.ru/wishlist/");
        driver.get("https://www.lamoda.ru/wishlist/");
        // 12 | assertText | xpath=//div[2]/div/div/div[2]/div | В избранном нет товаров
        // assert no items text
        assertThat(driver.findElement(By.xpath("//div[2]/div/div/div[2]/div")).getText(), is("В избранном нет товаров"));
    }
}