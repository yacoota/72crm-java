package com.kakarote.crm9.common.config;

import com.jfinal.kit.PathKit;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;

public class PathKitExt extends PathKit {


    public static String getRoot1ClassPath() {
        try {
            String path = PathKitExt.class.getClassLoader().getResource("").toURI().getPath();
            return new File(path).getAbsolutePath();
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String getRoot2ClassPath() {
        try {
            String path = PathKitExt.class.getProtectionDomain().getCodeSource().getLocation().getPath();
            path = java.net.URLDecoder.decode(path, "UTF-8");
            if (path.endsWith(File.separator)) {
                path = path.substring(0, path.length() - 1);
            }
            return path;
        } catch (UnsupportedEncodingException e1) {
            throw new RuntimeException(e1);
        }
    }
}
