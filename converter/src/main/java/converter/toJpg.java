package converter;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.imageio.ImageIO;

import org.apache.pdfbox.exceptions.CryptographyException;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.encryption.AccessPermission;
import org.apache.pdfbox.pdmodel.encryption.BadSecurityHandlerException;
import org.apache.pdfbox.pdmodel.encryption.DecryptionMaterial;
import org.apache.pdfbox.pdmodel.encryption.StandardDecryptionMaterial;
@SuppressWarnings("unchecked")
public class toJpg {
	
	public static void unlock() {
		PDDocument document = null;
		try
		{
		    document = PDDocument.load("F:/ready/무직전생 01.pdf");

		    if( document.isEncrypted() )
		    {
		        DecryptionMaterial decryptionMaterial = null;
		        decryptionMaterial = new StandardDecryptionMaterial("12345");
		        document.openProtection(decryptionMaterial);
		        AccessPermission ap = document.getCurrentAccessPermission();
		        if(ap.isOwnerPermission())
		        {
		            document.setAllSecurityToBeRemoved(true);
		            document.save("F:/done/music01-페이지-1-320.pdf");
		        }
		        else
		        {
		            throw new IOException(
		            "Error: You are only allowed to decrypt a document with the owner password." );
		        }
		    }
		    else
		    {
		        System.err.println( "Error: Document is not encrypted." );
		    }
		} catch (BadSecurityHandlerException n) {
			System.out.println("bad se");
		} catch (CryptographyException a) {
			System.out.println("cry");
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally
		{
		    if( document != null )
		    {
		        try {
					document.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
		    }
		}
	}
	public static void main(String[] args) {
		unlock();
		try {
			String sourceDir = "F:/ready/무직전생 01.pdf";
			String destinationDir = "F:/done/";
			
			File sourceFile = new File(sourceDir);
			File destinationFile = new File(destinationDir);
			
	        if (!destinationFile.exists()) {
	            destinationFile.mkdir();
	            System.out.println("Folder Created -> "+ destinationFile.getAbsolutePath());
	        }
	        if (sourceFile.exists()) {
	        	System.out.println("Images copied to Folder: "+ destinationFile.getName());             
	            PDDocument document = PDDocument.load(sourceDir);
	            System.out.println(document.getNumberOfPages());
	            List<PDPage> list = document.getDocumentCatalog().getAllPages();
	            System.out.println("Total files to be converted -> "+ list.size());

	            String fileName = sourceFile.getName().replace(".pdf", "");             
	            int pageNumber = 1;
	            for (PDPage page : list) {
	                BufferedImage image = page.convertToImage();
	                File outputfile = new File(destinationDir + fileName +"_"+ pageNumber +".png");
	                System.out.println("Image Created -> "+ outputfile.getName());
	                ImageIO.write(image , "jpg", new File( destinationDir +fileName+"_"+pageNumber+".jpg" ));
	                pageNumber++;
	            }
	            document.close();
	            System.out.println("Converted Images are saved at -> "+ destinationFile.getAbsolutePath());
	        } else {
	        	System.err.println(sourceFile.getName() +" File not exists");
	        }
		} catch (Exception e) {
	        e.printStackTrace();
	    }
	}
}
