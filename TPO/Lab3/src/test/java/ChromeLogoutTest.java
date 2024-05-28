// Generated by Selenium IDE

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import dev.netwid.TPO.Lab3.utils.Auth;

import org.openqa.selenium.JavascriptExecutor;

import java.util.*;

public class ChromeLogoutTest {
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
    public void logout() {
        Auth.auth(driver);
        // Test name: Log out
        // Step # | name | target | value
        // 1 | open | /women-home/ |
        driver.get("https://www.lamoda.ru//women-home/");
        // 2 | setWindowSize | 1936x1048 |
        driver.manage().window().setSize(new Dimension(1936, 1048));
        // 3 | mouseOver | xpath=//span/a |
        // mouse over profile
        {
            WebElement element = driver.findElement(By.xpath("//span/a"));
            Actions builder = new Actions(driver);
            builder.moveToElement(element).perform();
        }
        // 4 | mouseOut | xpath=//span/a |
        {
            WebElement element = driver.findElement(By.tagName("body"));
            Actions builder = new Actions(driver);
            builder.moveToElement(element, 0, 0).perform();
        }
        // 5 | click | xpath=//div/div/a[11] |
        // click Выйти button
        driver.findElement(By.xpath("//div/div/a[11]")).click();
        // 6 | assertElementPresent | xpath=//button[contains(.,'Войти')] |
        // check is Войти button present
        {
            List<WebElement> elements = driver.findElements(By.xpath("//button[contains(.,\'Войти\')]"));
            assert (elements.size() > 0);
        }
    }
}
