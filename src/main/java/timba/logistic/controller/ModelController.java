package timba.logistic.controller;

import timba.logistic.domain.Model;
import timba.logistic.repo.ModelRepo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/model")
public class ModelController extends AbstractRestController<Model, ModelRepo> {
    public ModelController(ModelRepo repo) {
        super(repo);
    }
}
